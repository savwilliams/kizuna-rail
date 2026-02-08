/**
 * Helper function to set all expected res.locals values
 */
const setLocalVariables = (req, res, next) => {
    // Make NODE_ENV available to all templates
    res.locals.NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';

    // Make any query parameters available to all templates
    res.locals.query = req.query;

    // Set the logo tooltip text for all pages
    res.locals.logoTooltip = 'Click on logo to retun to homepage';
    
    next();
        
};

export default setLocalVariables;