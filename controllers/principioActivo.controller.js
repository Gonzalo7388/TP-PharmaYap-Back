import PrincipioActivo from '../models/PrincipioActivo.js';

// Obtener todos los principios activos
export const getPrincipiosActivos = async (req, res) => {
  try {
    const principios = await PrincipioActivo.find().sort({ nombre: 1 });
    res.status(200).json(principios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los principios activos.', error });
  }
};

// Obtener uno por ID
export const getPrincipioActivoById = async (req, res) => {
  try {
    const principio = await PrincipioActivo.findById(req.params.id);
    if (!principio) return res.status(404).json({ message: 'Principio activo no encontrado.' });
    res.status(200).json(principio);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el principio activo.', error });
  }
};

// Crear nuevo
export const createPrincipioActivo = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const existe = await PrincipioActivo.findOne({ nombre });
    if (existe) return res.status(400).json({ message: 'El principio activo ya existe.' });

    const nuevo = new PrincipioActivo({ nombre, descripcion });
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el principio activo.', error });
  }
};

// Actualizar
export const updatePrincipioActivo = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const actualizado = await PrincipioActivo.findByIdAndUpdate(
      req.params.id,
      { nombre, descripcion },
      { new: true }
    );

    if (!actualizado) return res.status(404).json({ message: 'Principio activo no encontrado.' });
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el principio activo.', error });
  }
};

// Eliminar
export const deletePrincipioActivo = async (req, res) => {
  try {
    const eliminado = await PrincipioActivo.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ message: 'Principio activo no encontrado.' });
    res.status(200).json({ message: 'Principio activo eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el principio activo.', error });
  }
};
