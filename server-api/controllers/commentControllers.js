const Comment = require('../models/Comment');

//obtener todos los resultados
const getAllComments = async (req, res) => {
    try{
        const comments = await Comment.findAll();
        res.json(comments);
    } catch(error) {
        res.status(500).json({ error: error. message });
    }
};

// obtener un comentario por Id

const getCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByPk(id);
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).json ({ error: 'Comentario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// crear un comentario
const createComment = async (req, res) => {
    try {
        const { comment_text, user_id, movie_id, series_id } = req.body;
        const newComment = await Comment.create({
            comment_text,
            user_id,
            movie_id,
            series_id,
        });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// actualizar un comentario 
const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment_text, user_id, movie_id, series_id } = req.body;

        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }

        await Comments.update({
            comment_text,
            user_id,
            movie_id,
            series_id,
        }, {
            where: { comment_id: id }
        });

        res.json({ message: 'Comentario actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// eliminar un comentario
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await Comments.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }

        await Comments.destroy({
            where: { comment_id: id }
        });

        res.json({ message: 'Comentario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
};