import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Développeur passionné par le JavaScript et React.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Développeur Frontend',
      },
      show: false,
      mountedTime: 0,
    };
  }

  // Méthode appelée au montage du composant
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000); // Met à jour l'état toutes les secondes
  }

  // Méthode appelée avant le démontage du composant
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Fonction pour basculer l'état d'affichage du profil
  toggleProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Gestion de profil avec React</h1>

        {/* Bouton pour basculer l'état */}
        <button onClick={this.toggleProfile}>
          {show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>

        {/* Affichage conditionnel du profil */}
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        {/* Affichage du temps écoulé depuis le montage du composant */}
        <p>Temps écoulé depuis le montage : {mountedTime} secondes</p>
      </div>
    );
  }
}

export default App;
