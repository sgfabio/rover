//JS | Module Exercise: Mars Rover kata
// Esta versão: B3 Bonus 3 | Validate Inputs | Release 2
// versão B2: Bonus 2 | Move Backwards
// versão B1: Bonus 1 | Enforce Boundaries
// versão I5: Iteração 5 | Release 1

// Rover Object Goes Here
// ======================
let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{x:0,y:0}],
  };
  
  // ====================== TESTING ======================
  
  //Test Cases:
  
  // TC01 - Sanity test
  //command(rover, "rffffrffbrbbflff");
  
  // TC02 Bonus 1 | Enforce Boundaries
  //partindo-se de 'N' com o rover em (0,0) -> movimento vertical não permitido
  //command(rover, "fff");
  
  // TC03 Bonus 1 | Enforce Boundaries
  //partindo-se de 'N' com o rover em (0,0) -> movimento horizontal a 'E' + 10 passos: 9 permitidos + 1 não permitido
  //command(rover, "rfffffffffff");
  
  // TC04 Bonus 1 | Enforce Boundaries 
  //Partindo-se de 'N' com o rover em (0,0) -> muda a direção 'E', depois 'S' + 11 passos: 9 permitidos + 1 não permitido
  //command(rover, "rrfffffffffff");
  
  // TC05 Teste do Bonus 2 | Move Backwards 
  //partindo-se de 'N' com o rover em (0,0) -> muda a direção 'E', avança 4 passos retrocede 2 passos,  ;
  // vira à 'S'avança mais 4 passos, mas retroce 2 passos; 
  // vira à 'E e avança mais 4 passos, mas retrocede 2 passos
  //command(rover, "rffffbbrffffbblffffbb");
  
  //TC06 Bonus 3 | Validate Inputs
  command(rover, "rrfflfb c123@^{}"); // apenas os sete primeiros comandos serão aceitos; nove comandos serão rejeitados
  
  // ====================== FUNCTIONS ======================
  //Examples:
  //Rover is facing North and turns left => Rover is now facing West
  //Rover is facing West and turns left => Rover is now facing South
  //Rover is facing North and turns right => Rover is now facing East.
  //Facing	|Turn Left |	Turn Right
  //  N	    |   W	     |  E
  //  S	    |   E	     |  W
  //  E	    |   N	     |  S
  //  W	    |   S	     |  N
  
  // ====================== TURN LEFT
  function turnLeft(rover){
    //console.log("turnLeft was called!");
    const direction = rover.direction;
    switch(direction){
      case "N":
        rover.direction = "W";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
      case "W":
        rover.direction = "S";
        break;
    }
    console.log(`Rover was facing '${direction}' and now it is facing '${rover.direction}' - position: (${rover.x}, ${rover.y}) `);
  }
  
  // ====================== TURN RIGHT
  function turnRight(rover){
    //console.log("turnRight was called!");
    const direction = rover.direction;
    switch(direction){
      case "N":
        rover.direction = "E";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "W":
        rover.direction = "N";
        break;
    }
    console.log(`Rover was facing '${direction}' and now it is facing '${rover.direction}' - position: (${rover.x}, ${rover.y}) `);
  }
  
  // ====================== MOVE FORWARD 
  function moveForward(rover){
    //console.log("moveForward was called");
    const direction = rover.direction;
    const x = rover.x;
    const y = rover.y;
    //console.log (`position: (${rover.x}, ${rover.y})`)
    if( x >= 0 && x < 10 ) {   //avalia se o valor de x está dentro do intervalo permitido para movimento horizontal
      if( y >= 0 && y < 10 ){ //avalia se o valor de y está dentro do intervalo permitido para movimento vertical
        switch(direction){    //Baseado na direção do rover, executa o movimento para frente nesta direção
          case "N":
            rover.y -= 1; // Na direção Norte se o rover se move para frente ele decrementa o Y
            break;
          case "S":
            rover.y += 1; // Na direção Sul se o rover se move para frente ele incrementa o Y
            break;
          case "E":
            rover.x += 1; // Na direção Leste se o rover se move para frente ele incrementa o X
            break;
          case "W":
            rover.x -= 1; // Na direção Oeste se o rover se move para frente ele decrementa o X
            break;
        }
        console.log(`Init position (${x}, ${y}) facing '${direction}'-> moved FORWARD to (${rover.x}, ${rover.y})`);
      } else {
          console.log(`Movimento na direção vertical fora dos parâmetros permitidos`)
        }
    } else{
          console.log(`Movimento na direção horizontal fora dos parâmetros permitidos`)
    }
    let newPosition = {x:rover.x , y:rover.y};
    rover.travelLog.push(newPosition);
  }
  
  
  // ====================== MOVE BACKWARD 
  function moveBackward(rover){
    //console.log("moveBackward was called");
    const direction = rover.direction; // variável direction recebe valor do atributo rover.direction para passar ao switch
    const x = rover.x;  // variável x recebe valor do atributo rover.x para simplificar o if no Bonus 1 | Enforce Boundaries
    const y = rover.y;  // variável y recebe valor do atributo rover.y para simplificar o if no Bonus 1 | Enforce Boundaries              
    //console.log (`position: (${rover.x}, ${rover.y})`)
    if( x >= 0 && x < 10 ) {   //avalia se o valor de x está dentro do intervalo permitido para movimento horizontal
      if( y >= 0 && y < 10 ){ //avalia se o valor de y está dentro do intervalo permitido para movimento vertical
        switch(direction){    //Baseado na direção do rover, executa o movimento para trás nesta direção
          case "N":
            rover.y += 1; // Na direção Norte se move para trás ele incrementa o Y
            break;
          case "S":
            rover.y -= 1; // Na direção Sul se move para trás ele decrementa o Y
            break;
          case "E":
            rover.x -= 1; // Na direção Leste se move para trás ele decrementa o X
            break;
          case "W":
            rover.x += 1; // Na direção Oeste se move para trás ele decrementa o X
            break;
        }
        console.log(`Init position (${x}, ${y}) facing '${direction}'-> moved BACKWARD to (${rover.x}, ${rover.y})`); // Mostra posição anterior VS Atual
      } else {
          console.log(`Movimento na direção vertical fora dos parâmetros permitidos`) // variável y fora de parâmetro
        }
    } else{
          console.log(`Movimento na direção horizontal fora dos parâmetros permitidos`) // variável x fora de parâmetro
    }
    let newPosition = {x:rover.x , y:rover.y};
    rover.travelLog.push(newPosition); // passa newPosition (x,y) para guardar na array rover.travelLog[]
  }
  
  // // ====================== SEQUENCE and INVOKE movement functions
  function command(rover,orders){   
    for (let i = 0; i < orders.length; i++){
      let order = orders[i];  //Quebra a string-array  de ordens e.g. [rffffrrffffbb] e passa para o switch encaminhar as ordens às funções de movimentos
      switch (order){
        case "l": 
          turnLeft(rover); // turn left
          break;
        case "r": // turn right
          turnRight(rover);
          break;
        case "f": // move forward
          moveForward(rover);
          break;
        case "b": // move backward
          moveBackward(rover);
          break;
        default:
          console.log(`Choose a valid move 'l' to turn left, 'r' to turn right or 'f' to move forward`);
          break;
      }
    }
    //console.log(`The rover travel log: ${rover.travelLog}`)
    console.log(rover.travelLog)
  }