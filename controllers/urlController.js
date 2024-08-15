const shortid = require('shortid');
const Url = require('../models/url');

exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();

    try {
        const newUrl = await Url.create({ originalUrl, shortUrl });
        res.json({ originalUrl: newUrl.originalUrl, shortUrl: newUrl.shortUrl });
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
};

exports.redirectUrl = async (req, res) => {
    const { shortUrl } = req.params;

    try {
        const url = await Url.findOne({ where: { shortUrl } });

        if (url) {
            return res.redirect(url.originalUrl);
        } else {
            return res.status(404).json('URL not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
};
