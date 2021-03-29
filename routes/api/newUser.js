const router = require('express').Router();
//const user = require('/models/user')
router.get('/', async(req, res) => {
    try {
        const projectData = await Project.findAll({
            include: [{
                model: User,
                attributes: ['user'],
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

router.get('signup', async(req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['user'],
            }, ],
        });

        const project = projectData.get({ plain: true });

        res.render('dashboard', {
            ...project,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('dashboard');
        return;
    }

    res.render('dashboard');
});

module.exports = router;