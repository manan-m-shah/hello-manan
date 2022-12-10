import chalkAnimation from "chalk-animation";

// Dialogue Starts Here
const ask = (question, duration) => {
    const questionAnim = chalkAnimation(question);

    setTimeout(() => {
        questionAnim.start(); // Animation resumes
    }, 100);

    setTimeout(() => {
        questionAnim.stop(); // Animation stops
    } , duration);
}

export default ask;