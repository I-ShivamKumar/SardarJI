import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Corousel() {
    {
        return (
            <Carousel autoPlay showThumbs={false} infiniteLoop showArrows swipeable showStatus={false}>
                <div>
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    />
                </div>
                <div>
                    <img
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4IFDa9tH3zxEiOifIsHvrReUKOXZJsPGI0IYWRZ0VF2I-cA8OWjpRLV6wUnLeVq7FQqE&usqp=CAU"
                    />

                </div>
                <div>
                    <img alt="" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />

                </div>
                <div>
                    <img alt="" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />

                </div>
                <div>
                    <img alt="" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />

                </div>
            </Carousel>
        );
    }
};

export default Corousel
