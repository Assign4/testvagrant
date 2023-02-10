describe('template spec', () => {


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
    cy.fixture('example').then(function (example) {
      this.example = example
  })

})


  it('Test to validate 4 foreign players in a team',function () {
    expect(getFoeignPayerCount(this.example.player)).to.equal(4)
    
  })

  it('Test to validate atleast one wicket keeper',function () {
    expect(getKeeperCount(this.example.player)).to.be.true
  })
})