import { useEffect } from 'react';

const useSnake = () => { //haha
  let nodes = []
  const setInitialVelocity = () => {
        nodes[0].dx = 15;
  }
  useEffect(() => {
    const gameArea = document.querySelector('#game-area')
    let lost = false;
    let foodItem;

    let initialHead = document.createElement('div');
    initialHead.setAttribute('class', 'snakeNode')
    initialHead.style.left = '0px';
    initialHead.style.top = '150px';
    nodes.push({
      obj: initialHead,
      dx: 0,
      dy: 0
    })
    gameArea.appendChild(initialHead);


    const spawnFood = () => {
      foodItem = document.createElement('div')
      foodItem.setAttribute('class', 'food');
      let randomX = Math.floor(Math.random() * 26);
      let randomY = Math.floor(Math.random() * 26);
      foodItem.style.left = (randomX * 15 + 5) + 'px';
      foodItem.style.top = (randomY * 15 + 5) + 'px';
      gameArea.appendChild(foodItem);
    }
    const updatePosition = () => {
      if (nodes.length > 1) {
        nodes.push(nodes.shift()); //rotate array
        let newX = parseInt(nodes[nodes.length - 2].obj.style.left) + nodes[nodes.length - 2].dx;
        let newY = parseInt(nodes[nodes.length - 2].obj.style.top) + nodes[nodes.length - 2].dy;
        if (detectWallCollision(newX, newY))
          return false;
        nodes[nodes.length - 1].dx = nodes[nodes.length - 2].dx;
        nodes[nodes.length - 1].dy = nodes[nodes.length - 2].dy;
        nodes[nodes.length - 1].obj.style.left = newX + 'px';
        nodes[nodes.length - 1].obj.style.top = newY + 'px';
      } else {
        let newX = parseInt(nodes[0].obj.style.left) + nodes[0].dx;
        let newY = parseInt(nodes[0].obj.style.top) + nodes[0].dy;
        if (detectWallCollision(newX, newY))
          return false;
        nodes[0].obj.style.left = newX + 'px';
        nodes[0].obj.style.top = newY + 'px';
      }
      return true;
    }
    const detectFoodCollision = () => {
      let foodX = parseInt(foodItem.style.left) - 5;
      let foodY = parseInt(foodItem.style.top) - 5;
      let headX = parseInt(nodes[nodes.length - 1].obj.style.left);
      let headY = parseInt(nodes[nodes.length - 1].obj.style.top);
      return foodX === headX && foodY === headY;


    }
    const detectWallCollision = (currentX, currentY) => {
      return currentX < 0 || currentX >= 390 || currentY < 0 || currentY >= 390;
    }
    const detectSelfCollision = () => {
      if (nodes.length === 1)
        return false;
      let headX = parseInt(nodes[nodes.length - 1].obj.style.left);
      let headY = parseInt(nodes[nodes.length - 1].obj.style.top);
      for (let i = 0; i < nodes.length - 1; i++) {
        let currX = parseInt(nodes[i].obj.style.left);
        let currY = parseInt(nodes[i].obj.style.top);
        if (currX === headX && currY === headY)
          return true;
      }
      return false;
    }
    const addTailElement = () => {
      let newNode = document.createElement('div');
      newNode.setAttribute('class', 'snakeNode');
      if (nodes.length > 1) {
        let tail = {
          x: parseInt(nodes[0].obj.style.left),
          y: parseInt(nodes[0].obj.style.top)
        }
        let secondFromTail = {
          x: parseInt(nodes[1].obj.style.left),
          y: parseInt(nodes[1].obj.style.top)
        }
        newNode.style.left = (tail.x + (tail.x - secondFromTail.x)) + 'px';
        newNode.style.top = (tail.y + (tail.y - secondFromTail.y)) + 'px';

      } else {
        let headX = parseInt(nodes[nodes.length - 1].obj.style.left);
        let headY = parseInt(nodes[nodes.length - 1].obj.style.top);
        newNode.style.left = (headX - nodes[nodes.length - 1].dx) + 'px';
        newNode.style.top = (headY - nodes[nodes.length - 1].dy) + 'px';
      }
      nodes.unshift({
        obj: newNode,
        dx: 0,
        dy: 0
      });
      gameArea.appendChild(newNode);
    }


    const clock = () => {
      if (!lost) {
        if (!detectSelfCollision() && updatePosition()) {
          if (detectFoodCollision()) {
            foodItem.remove();
            spawnFood();
            addTailElement();
          }
        }
        else {
          lost = true;
        }
      }
      else {
        document
          .querySelector("#you-lose")
          .style
          .visibility = 'visible';
      }
    }
    const keyEventHandler = ev => {
      switch (ev.keyCode) {
        case 87:
          nodes[nodes.length - 1].dx = 0;
          nodes[nodes.length - 1].dy = -15;
          break;
        case 83:
          nodes[nodes.length - 1].dx = 0;
          nodes[nodes.length - 1].dy = 15;
          break;
        case 65:
          nodes[nodes.length - 1].dx = -15;
          nodes[nodes.length - 1].dy = 0;
          break;
        case 68:
          nodes[nodes.length - 1].dx = 15;
          nodes[nodes.length - 1].dy = 0;
          break;
        case 17:
          restart();
          break
        default:
          break;
      }
    }

    let difficultyMap = new Map();
    difficultyMap.set('Easy', 200);
    difficultyMap.set('Medium', 150);
    difficultyMap.set('Hard', 100);
    difficultyMap.set('Brutal', 50);

    const restart = () => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].obj.remove();
      }
      nodes = [];
      initialHead = document.createElement('div');
      initialHead.setAttribute('class', 'snakeNode')
      initialHead.style.left = '0px';
      initialHead.style.top = '150px';
      nodes.push({
        obj: initialHead,
        dx: 15,
        dy: 0
      })
      gameArea.appendChild(initialHead);
      lost = false;
      document
        .querySelector("#you-lose")
        .style
        .visibility = 'hidden';
    }

    document
      .querySelector("#you-lose")
      .style
      .visibility = 'hidden';
    document.addEventListener('keydown', keyEventHandler);
    let timerID = window.setInterval(clock, difficultyMap.get('Hard'));
    spawnFood();
    return () => {
      document.removeEventListener('keydown', keyEventHandler);
      window.clearInterval(timerID);
    }
  }, [])
  return setInitialVelocity;
}

export default useSnake;