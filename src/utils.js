export const container = document.querySelector('.container');
export const observeTarget = target => callback => {
    const mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(target, { childList: true });
};
export const doesMyComponentExist = () => !!document.querySelector("#my-component");
export const observeContainer = observeTarget(container);
