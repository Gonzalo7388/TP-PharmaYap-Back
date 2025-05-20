// controllers/categoria.controller.js
import Categoria from '../models/Categoria.js';

// Crear nueva categoría
export const crearCategoria = async (req, res) => {
  try {
    const nuevaCategoria = new Categoria(req.body);
    const categoriaGuardada = await nuevaCategoria.save();
    res.status(201).json(categoriaGuardada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las categorías
export const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener categoría por ID
export const obtenerCategoriaPorId = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (!categoria) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar categoría
export const actualizarCategoria = async (req, res) => {
  try {
    const categoriaActualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!categoriaActualizada) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    res.json(categoriaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar categoría
export const eliminarCategoria = async (req, res) => {
  try {
    const categoriaEliminada = await Categoria.findByIdAndDelete(req.params.id);
    if (!categoriaEliminada) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    res.json({ mensaje: 'Categoría eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
