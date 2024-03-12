/**
 * Criado por https://github.com/rodriaum
 * Sistema que procura a linha seja preto ou branco, de acordo com a configuração.
 */

/** Inicia o sistema junto com as variáveis */

let blackBackground = false, activate = false;

// Ao clicar no botão 'A' o sistema inicia ou termina se já iniciado.
input.onButtonPressed(Button.A, () => activate = !activate);
// Ao clicar no botão 'B' ele muda o sistema que detecta as linhas seja preto ou branco.
input.onButtonPressed(Button.B, () => blackBackground = !blackBackground);

/** Repetidor de Códigos. */

basic.forever(function () {
    if (activate) {
    
    if (blackBackground) {
        if (left() == 0 && right() == 0)
            handleRunAhead();

        else if (left() == 1 && right() == 0)
            handleRunLeft();

        else if (left() == 0 && right() == 1)
            handleRunRight();

    } else {
        if (left() == 1 && right() == 1)
            handleRunAhead();

        else if (left() == 0 && right() == 1)
            handleRunLeft();

        else if (left() == 1 && right() == 0)
            handleRunRight();
    }

    } else {
        maqueen.motorStop(maqueen.Motors.All);
        basic.showIcon(IconNames.House);
    }
})

function handleRunAhead() {
    // Lado bonito: Led e Icon.
    basic.showIcon(IconNames.Happy);
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff);
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff);
    // Evento do motor: Continua em Frente.
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80);
}

function handleRunRight() {
    // Lado bonito: Led e Icon.
    basic.showIcon(IconNames.Snake);
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn);
    // Evento do motor: Vira a Direita.
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 15);
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80);
}

function handleRunLeft() {
    // Lado bonito: Led e Icon.
    basic.showIcon(IconNames.Snake);
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn);
    // Evento do motor: Vira a Esquerda.
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80);
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 15);
}

/** Evento Ler Patrol */

function right() {
    return maqueen.readPatrol(maqueen.Patrol.PatrolRight);
}

function left() {
    return maqueen.readPatrol(maqueen.Patrol.PatrolLeft);
}





