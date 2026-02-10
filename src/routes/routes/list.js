import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    let routes = await getAllRoutes();
    const seasons = await getListOfSeasons();

    const region = req.query.region && req.query.region !== 'all' ? req.query.region : null;
    const season = req.query.season && req.query.season !== 'all' ? req.query.season : null;

    if (region) {
        routes = routes.filter(r => r.region.toLowerCase() === region.toLowerCase());
    }
    if (season) {
        routes = routes.filter(r => r.bestSeason.toLowerCase() === season.toLowerCase());
    }

    res.render('routes/list', {
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        query: { region: req.query.region || '', season: req.query.season || '' }
    });
};