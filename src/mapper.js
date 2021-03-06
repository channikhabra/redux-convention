let fromCCAtoFSA,
    fromFSAtoCCA;

fromCCAtoFSA = (CCAction) => {
    let FSAction;

    FSAction = {};

    if (CCAction.name) {
        FSAction.type = CCAction.name;
    }

    if (CCAction.data) {
        FSAction.payload = CCAction.data;
    }

    if (CCAction.metadata) {
        FSAction.meta = CCAction.metadata;
    }

    if (CCAction.error) {
        FSAction.payload = CCAction.error;
        FSAction.error = true;
    }

    return FSAction;
};

fromFSAtoCCA = (FSAction) => {
    let CCAction;

    CCAction = {};

    if (FSAction.type) {
        CCAction.name = FSAction.type;
    }

    if (FSAction.payload) {
        CCAction.data = FSAction.payload;
    }

    if (FSAction.meta) {
        CCAction.metadata = FSAction.meta;
    }

    if (FSAction.error) {
        CCAction.error = FSAction.payload;
    }

    return CCAction;
};

export default {
    fromCCAtoFSA,
    fromFSAtoCCA
};
