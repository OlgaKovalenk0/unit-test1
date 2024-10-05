export function getHelthStatus({ health }) {
    //player {name: 'Маг', health: 90}

    if(health > 50) return 'healthy';
    if(health >= 15 && health <= 50) return 'wounded';
    return 'critical'
}