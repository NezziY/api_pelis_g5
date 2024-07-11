const { validationResult } = require('express-validator');
const Comment = require('../models/Comment');

// Obtener todos los comentarios
const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (error) {
        console.error('Error al obtener comentarios:', error.message);
        res.status(500).json({ error: 'Error al obtener comentarios', details: error.message });
    }
};

// Obtener un comentario por ID
const getCommentById = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const comment = await Comment.findByPk(id);
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).json({ error: 'Comentario no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener comentario por ID:', error.message);
        res.status(500).json({ error: 'Error al obtener comentario', details: error.message });
    }
};

// Crear un comentario
const createComment = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { comment_text, user_id, movie_id, series_id } = req.body;

        // Verificar que el movie_id existe en la tabla movies
        if (movie_id) {
            const movie = await Movie.findByPk(movie_id);
            if (!movie) {
                return res.status(400).json({ error: 'Invalid movie_id' });
            }
        }

        const newComment = await Comment.create({
            comment_text,
            user_id,
            movie_id,
            series_id,
            created_at: new Date(),
        });
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error al crear comentario:', error.message);
        res.status(500).json({ error: 'Error al crear comentario', details: error.message });
    }
};

// Actualizar un comentario
const updateComment = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const { comment_text, user_id, movie_id, series_id } = req.body;

        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }

        await Comment.update({
            comment_text,
            user_id,
            movie_id,
            series_id,
        }, {
            where: { comment_id: id }
        });

        res.json({ message: 'Comentario actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar comentario:', error.message);
        res.status(500).json({ error: 'Error al actualizar comentario', details: error.message });
    }
};

// Eliminar un comentario
const deleteComment = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;

        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }

        await Comment.destroy({
            where: { comment_id: id }
        });

        res.json({ message: 'Comentario eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar comentario:', error.message);
        res.status(500).json({ error: 'Error al eliminar comentario', details: error.message });
    }
};

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
};
