const router = require('express').Router();
const user = require('../models/user')
router.get('/', async(req, res) => {
    try {
        const projectData = await Project.findAll({
            include: [{
                model: User,
                attributes: ['name'],
            }, ],
        });

        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('main', {
            projects,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async(req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['name'],
            }, ],
        });

        const project = projectData.get({ plain: true });

        res.render('/', {
            ...project,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/workout');
        return;
    }

    res.render('/login');
});

module.exports = router;