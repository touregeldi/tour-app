export const addTour = (
    {
        id = 0,
        city = "",
        img = "",
        name = "",
        info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
    } = {}
) => (
    {
        type:'ADD_TOUR',
        tour:{
            id,
            city,
            img,
            name,
            info
        }
    }
)

export const deleteTour = ({id}) => (
    {
        type:'DELETE_TOUR',
        tour:id
    }
)