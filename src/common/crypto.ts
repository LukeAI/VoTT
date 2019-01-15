import { randomBytes } from "crypto";

export function generateKey(keySize: number = 8) {
    const byteArray = new Uint32Array(keySize);
    getRandomValues(byteArray);

    const chars: string[] = [];
    byteArray.forEach((value) => {
        chars.push(String.fromCharCode(value));
    });

    return btoa(chars.join());
}

function getRandomValues(buffer: Uint32Array) {
    if (window.crypto) {
        return window.crypto.getRandomValues(buffer);
    }

    for (let i = 0; i < buffer.length; i++) {
        buffer[i] = Math.floor(Math.random() * 2147483647) + 0;
    }

    return buffer;
}
