const getData = () => fetch("/check")
    .then(res => res.json());

export default getData;