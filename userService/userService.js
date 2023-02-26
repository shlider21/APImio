const getConection= require('../libs/postgres')

class UserService{

    async find(){
        const client= await getConection();
        const user = await client.query('select * from empleado')
        return user.rows;


    }

}

module.exports= UserService;