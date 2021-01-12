const background = ({ display, width, height, image, repeat, size, position }) => {
    return {
        display: display,
        width: width,
        height: height,
        backgroundImage: `url('${image}')`,
        backgroundRepeat: repeat,
        backgroundSize: size,
        backgroundPosition: position
    }
}
export default background;
