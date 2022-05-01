module.exports = {

    saveTeam: async (req, res) => {
        const db = req.app.get('db')
        // console.log(req.session.user)
        console.log(req.body)
        const { pokemon_1, pokemon_2, pokemon_3, pokemon_4, pokemon_5, pokemon_6, team_name } = req.body
            if(!req.session.user){
                res.status(403).send('Need to log in to save team!')
            }
        const pkmTeamTable = await db.save_team([req.session.user.id, team_name])
        const teamId = pkmTeamTable[0].pokemon_team_id
        const pkm = await db.save_pkm([teamId,pokemon_1, pokemon_2, pokemon_3, pokemon_4, pokemon_5, pokemon_6])
        console.log(pkm)
        pkm[0].team_name = team_name
            res.status(201).send(pkm[0])
        },

    userTeamNames: async(req, res) => {
            const db = req.app.get('db')

            const teamNameId = await db.get_team_name(req.session.user.id)

            return res.status(201).send(teamNameId)
    
    },
    getTeam: async(req,res)=>{
        const db = req.app.get('db')
        const {teamid} = req.params
        const pkmTeam = await db.get_team([teamid])
        console.log(pkmTeam)
    
        return res.status(201).send(pkmTeam)
    },

    getAllUserTeams: async (req, res) => {
        const db = req.app.get('db')

        const allUserTeams = await db.all_user_teams([req.session.user.id])

        return res.status(201).send(allUserTeams)

    },

    getTeamName: async(req,res) =>{
        const db = req.app.get('db')
        const {teamid} = req.params
        const team_name = await db.get_team_name(teamid)
        return res.status(201).send(team_name)
    },
        

    allTeams: (req, res) => {
        const db = req.app.get('db')
    },


    editTeam: (req, res) => {
        const db = req.app.get('db')

    },

    deleteTeam: (req, res) => {
        const db = req.app.get('db')

    }

}