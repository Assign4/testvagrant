describe('template spec', () => {

  /* 
    Const function which returns for foreign player count
      - Expects Array of Objects consisting of players
      - Returns foreign player count
  */

  const getFoeignPayerCount = (team_details) => {
    let count = 0;
    team_details.forEach( (player) => {
      //console.log(typeof player.country)
      if(player.country != 'India') {
        count ++;
      }
    })
    return count;
  }

  /* 
    Const function which returns for Wicket keeper count
      - Expects Array of Objects consisting of players
      - Returns Wicket keeper count
  */

  const getKeeperCount = (team_details) => {
    let count = false;
    team_details.forEach( (player) => {
      //console.log(typeof player.country)
      if(player.role != 'Wicket-keeper') {
        count ++;
      }
    })
    if(count > 0) {
      count = true;
    }
    return count;
  }

  beforeEach(() => {
    /*
      Servers Players.json for each tests
    */
    cy.fixture('team_rcb').then(function (team) {
      this.team = team
  })

})


  it('Test to validate 4 foreign players in a team',function () {

    //Fetch count of players using getFoeignPayerCount method
    let foreignPlayerCount = getFoeignPayerCount(this.team.player)
    //Assertion
    expect(foreignPlayerCount).to.equal(4)
    
  })

  it('Test to validate atleast one wicket keeper',function () {
    //Fetch count of players using getKeeperCount method
    let wicketKeeperCount = getKeeperCount(this.team.player)
    //Assertion
    expect(wicketKeeperCount).to.be.true
  })
})