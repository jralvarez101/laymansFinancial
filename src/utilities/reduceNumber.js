const reduceNumber  = (value) => {
    if(value && value !== 0 && typeof value === 'number'){

        return value/1000;
    }

    return 0
}

export default reduceNumber