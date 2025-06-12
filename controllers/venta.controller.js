import Venta from '../models/Venta.js';
import Producto from '../models/Producto.js';

// Crear venta
export const crearVenta = async (req, res) => {
  try {
    const { cliente, productos, metodo_pago } = req.body;

    if (!productos || productos.length === 0) {
      return res.status(400).json({ error: 'La venta debe contener al menos un producto.' });
    }

    let total = 0;
    const productosProcesados = [];

    for (const item of productos) {
      const productoDB = await Producto.findById(item.producto);

      if (!productoDB) {
        return res.status(404).json({ error: `Producto con ID ${item.producto} no encontrado.` });
      }

      if (productoDB.stock < item.cantidad) {
        return res.status(400).json({
          error: `Stock insuficiente para el producto ${productoDB.nombre}. Stock disponible: ${productoDB.stock}`,
        });
      }

      const subtotal = item.cantidad * productoDB.precio_unitario;
      total += subtotal;

      productosProcesados.push({
        producto: productoDB._id,
        cantidad: item.cantidad,
        precio_unitario: productoDB.precio_unitario,
        subtotal,
      });

      // Descontar stock
      productoDB.stock -= item.cantidad;
      await productoDB.save();
    }

    const nuevaVenta = new Venta({
      cliente,
      productos: productosProcesados,
      total,
      metodo_pago,
    });

    await nuevaVenta.save();
    const ventaConPopulado = await Venta.findById(nuevaVenta._id)
      .populate('cliente', 'nombre apellido correo_electronico')
      .populate('productos.producto', 'nombre');

    res.status(201).json(ventaConPopulado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find()
      .populate('cliente', 'nombre apellido correo_electronico')
      .populate('productos.producto', 'nombre');
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener venta por ID
export const obtenerVentaPorId = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id)
      .populate('cliente', 'nombre apellido correo_electronico')
      .populate('productos.producto', 'nombre');

    if (!venta) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }

    res.json(venta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar venta (no revierte stock, pero podría implementarse)
export const eliminarVenta = async (req, res) => {
  try {
    await Venta.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Venta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
