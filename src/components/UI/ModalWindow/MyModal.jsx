import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
    const rootClassess = [cl.myModal];
    if (visible){
        rootClassess.push(cl.active);
    }
    return (
        <div className={rootClassess.join(" ")} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;