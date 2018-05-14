import React from 'react';
import PropTypes from 'prop-types';

const image = {
    tummeUpp: require('../../images/icons/tummeupp.png')
};

const Modal = ({ modal: { state, praise, points } }) => {
  return (
    <div className={'correct-modal' + (state === 'show' ? ' modal-enter' : '')}>
      <div className="praise">{<img width="200em" src={image.tummeUpp}/>}</div>
    </div>
  );
};

Modal.propTypes = {
  modal: PropTypes.shape({
    state: PropTypes.string.isRequired,
    praise: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired
  })
};

export default Modal;
