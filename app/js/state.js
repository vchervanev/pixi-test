
const state = {
    active: false,
    items: [
        { 
            radius: 60, 
            speed: 10, 
            children:[
                {
                    radius: 20,
                    speed: 5
                },
            ]
        }
    ],
}

export default state