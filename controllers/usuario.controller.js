// controllers/usuario.controller.js
import Usuario from '../models/Usuario.js';

export const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

export const obtenerUsuarioPorId = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(usuario);
};

export const actualizarUsuario = async (req, res) => {
  const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(usuario);
};

export const eliminarUsuario = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Usuario eliminado' });
};
