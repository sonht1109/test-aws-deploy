const input = {
  a_b_x: 1,
  a_b_y: 2,
  a_b_z_m: 3,
  a_c: 4,
  d: 5,
};

const output = {
  a: {
    b: {
      x: 1,
      y: 2,
      z: {
        m: 3,
      },
    },
    c: 4,
  },
  d: 5,
};

function deepen(obj) {
  const result = {};

  for (const objectPath in obj) {
    const parts = objectPath.split("_");

    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      if (!target[part]) {
        target[part] = {};
      }
      target = target[part];
    }

    target[parts[0]] = obj[objectPath];
  }

  console.log(JSON.stringify(result));
}

deepen(input);
