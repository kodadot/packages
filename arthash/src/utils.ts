


export function preview() {
  console.log("Talking");
  const canvas = document.querySelector("canvas");
  const message = {
    id: Date.now(),
    type: "kodahash/render/completed",
    payload: {
      hash: window.hash,
      type: "image/png",
      image: canvas ? canvas.toDataURL("image/png") : undefined,
      search: location.search,
      attributes: [],
    },
  };
  console.log("Sending", message);

  window.parent.postMessage(message, "*");
}

export function dimensions(): [number, number] {
  return [window.innerWidth, window.innerHeight]
}

export function squareDimension(): number {
  const [width, height] = dimensions()
  return Math.min(width, height)
}
