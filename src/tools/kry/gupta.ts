const str_to_array_buffer = (str: string) => {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};
const array_buffer_to_str = (buff: ArrayBuffer) => {
  return Array.from(new Uint8Array(buff))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};
const do_hash = async (value: string, algorithm: string) => {
  const buffer = str_to_array_buffer(value); // Fix
  const hash_bytes = await crypto.subtle.digest(algorithm, buffer);
  const hash = array_buffer_to_str(hash_bytes);
  return hash;
};

export const hash_512 = async (str: string) => {
  return do_hash(str, 'SHA-512');
};
export const hash_256 = async (str: string) => {
  return do_hash(str, 'SHA-256');
};
export const salt = () => {
  // genertating a 32 length random string salt
  return array_buffer_to_str(crypto.getRandomValues(new Uint8Array(16)));
};

/** Hash verifier for `sha-512` */
export const puShTi = async (pass: string, hash: string) => {
  const salt = hash.substring(128);
  const hsh = hash.substring(0, 128);
  return hsh === (await hash_512(pass + salt));
};
