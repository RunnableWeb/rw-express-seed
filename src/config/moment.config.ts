import moment from 'moment-timezone';

export default () => {
    moment.tz.setDefault('GMT');
};
