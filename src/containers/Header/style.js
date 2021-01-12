import background from '../../mixins';

const getHeaderStyles = () => ({
    root: {
      display: 'flex',
      width: '100%',
      backgroundColor: '#212121',
      boxShadow: '0px 10px 13px -7px rgba(0,0,0,0.2)'
    },
    logo: {
      padding: '0 1%',
      width: '10%',
    },
    logoImage: background({
        display: 'block',
        width: '100%',
        height: '100%',
        image: './favicon.png',
        repeat: 'no-repeat',
        size: 'contain',
        position: 'center'
    }),
});

export default getHeaderStyles;
