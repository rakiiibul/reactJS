import React  from 'react';
import Aux from '../../../hoc/ux';
import classes from './About.css';
import image1 from '../../../assets/images/my_photo.jpg'
const about =(props)=>(
    <Aux>
    <section classname={classes.About} id="about">
    <div className={classes.Maxwidth}>
        <h2 class="title">About me</h2>
        <div class="about-content">
            <div class="column left">
                <img src={image1} alt=""/>

            </div>
            <div class="column right">
                <div class="text">I'm Raikibul and I'm a <span class="typing-2">programmer</span></div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto est, soluta corrupti consequatur a velit distinctio delectus fugit debitis porro? Sit, dignissimos repudiandae? Libero totam animi quidem et mollitia aliquam.</p>
                <a href="#">Download CV</a>
            </div>

        </div>
        
        
    </div>
</section>
    <main>
    {props.children}
    </main>
    </Aux>
);
export default about;