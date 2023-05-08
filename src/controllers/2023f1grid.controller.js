import Grid from '../models/2023f1grid.model';
export const getGrid = async ( req,res ) => {
    try {
        const {driver, team, country, points, wins} = req.query
        let query = {}
        if(driver){
            query.driver = driver;
        }
        if(team){
            query.team = team;
        }
        if(country){
            query.country = country;
        }
        if(points){
            query.points = points;
        }
        if(wins){
            query.wins = wins;
        }
        console.log(driver,team,country,points,wins)
        const data = await Grid.find(query);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            message:'Ocurrió un error al traer la información'
        });
    }
}