const team = {
    _players: [],
    _games: [],
  
    get players() {
      return this._players
    },
    get games() {
      return this._games
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName:firstName,
        lastName:lastName,
        age:age
      }
      this._players.push(player)
    },
    addGame(opponentName, teamPoints, opponentPoints){
      let game = {
        opponent:opponentName,
        teamPoints:teamPoints,
         opponentPoints: opponentPoints
      }
      this._games.push(game)
    }
  }
  
  team._players.push({
    firstName: 'Alexis',
    lastName: 'Sanchez',
    age: 30
  })
  team.addPlayer('Steph', 'Lecur', 28)
  team.addPlayer('Lisa', 'Leslie', 34)
  team.addPlayer('Bog', 'Dadi', 39)
  
  console.log(team._players)
  team._games.push({
    opponentName: 'Lions',
    teamPoints: 40,
    opponentPoints: 28
  })
  team.addGame('Hawks','43','29')
  console.log(team._games)