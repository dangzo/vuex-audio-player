/*

  Roadmap:

  - 

*/

describe("Vuex Audio Player - UI Interactions", () => {

  beforeEach(() => {
    // BASE_URL already defined in cypress.json
    cy.visit("/");
  });

  context("Basic UI check:", () => {
    it("Should check that audio player UI elements are loaded", () => {
      // Audio player
      cy.get("[data-cy='player']").should("exist");
      cy.get("[data-cy='player'] > source")
        .should("exist")
        .and("have.length", 1);
    });

    it("Should check that playlist UI elements are loaded", () => {
      // Track list (we won't check each track title etc.)
      cy.fixture("audio-player").then(audioPlayer => {
        cy.get("[data-cy='playlist'] li")
          .should("exist")
          .and("have.length", audioPlayer.songsLength);
      });
    });

    it("Should check that first track is up and loaded", () => {
      //
      cy.fixture("audio-player").then(audioPlayer => {
        cy.get("[data-cy='player'] > source")
          .invoke("attr", "src")
          .should("eq", audioPlayer.trackNames[0]);
      });
      cy.get("[data-cy='playlist'] li")
        .eq(0)
        .should("have.class", "isPlaying");
    });
  });

  context("Audio Player interactions", () => {
    it("Should play a song when clicking on it (NOTE: audio is muted!)", () => {
      // Start by muting the audio player (we don't want to be too noisy!)
      cy.get("[data-cy='player']").should(audioSources => {
        audioSources[0].muted = true;
      });
      // Click on the third song
      cy.get("[data-cy='playlist'] li").eq(2).click();
      // Check song has been loaded
      cy.fixture("audio-player").then(audioPlayer => {
        cy.get("[data-cy='player'] > source")
          .invoke("attr", "src")
          .should("eq", audioPlayer.trackNames[2]);
      });
      // Check the song is playing
      cy.get("[data-cy='player']").should(audioSources => {
        let audible = false
        audioSources.each((i, el)=>{
          if (el.duration > 0 && !el.paused) {
            audible = true
          }
        });
        expect(audible).to.eq(true)
      });
    })
  });
});
