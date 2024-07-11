const express = require('express');
const { body, param } = require('express-validator');
const {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentControllers');

const router = express.Router();

const commentValidations = [
  body('comment_text').notEmpty().withMessage('Comment text is required'),
  body('user_id').isInt().withMessage('User ID must be an integer'),
  body('movie_id').optional().isInt().withMessage('Movie ID must be an integer'),
  body('series_id').optional().isInt().withMessage('Series ID must be an integer'),
];

// Validaciones para la ID
const idValidation = [param('id').isInt().withMessage('ID must be an integer')];

router.get('/comments', getAllComments);

router.get('/comments/:id', idValidation, getCommentById);

router.post('/comments', commentValidations, createComment);

router.put('/comments/:id', [...idValidation, ...commentValidations], updateComment);

router.delete('/comments/:id', idValidation, deleteComment);

module.exports = router;
