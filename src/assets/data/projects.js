import { v4 as uuidv4 } from 'uuid';
import Throwing from '../images/throwing.png';
import Running from '../images/running.png';
import Gamep from '../images/game.png';
import Capstone from '../images/capstone.png';
import UserInterface from '../images/usserinterface.png';
import KidsParadise from '../images/kidsparadise.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Destroy Game',
    desc:
      ' a game to test the player’s reflexes, where the goal is to click and destroy objects randomly tossed in the air before they can fall off the screen',
    img: UserInterface,
  },
  {
    id: uuidv4(),
    name: 'Throwing food to animals',
    desc:
      ' a top-down game with the objective of throwing food to hungry animals. who are stampeding toward me',
    img: Throwing,
  },
  {
    id: uuidv4(),
    name: 'Jumping game',
    desc:
      ' a fast-paced endless side-scrolling runner game where the player needs to time jumps over oncoming obstacles to avoid crashing',
    img: Running,
  },
  {
    id: uuidv4(),
    name: 'Arcade Game',
    desc:
      'an arcade-style Sumo battle with the objective of knocking increasingly difficult waves of enemies off of a floating island using power ups to help defeat them',
    img: Gamep,
  },
  {
    id: uuidv4(),
    name: 'Capstone',
    desc: 'A Full Responsive Website using Reactjs',
    img: Capstone,
  },
  {
    id: uuidv4(),
    name: 'KidsParadise',
    desc:
      'An educational website that helps students understand the course well and avoid the loss of the course that will always be available in this platform',
    img: KidsParadise,
  },
];

export default projects;
