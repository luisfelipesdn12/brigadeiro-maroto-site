/**
 * returnCleanNumber takes some phone number and
 * keep just the digits of it. Removing " ", "+"
 * and "-" characters.
 * @example
 *      returnCleanNumber("+55 11 93141-5925")
 *      // returns: "5511931415925"
 * @param phoneNumer The phone number.
 * @returns The digits of the phone number.
 */
 const returnCleanNumber = (phoneNumer: string): string => {
    return phoneNumer
        .replaceAll(" ", "")
        .replaceAll("+", "")
        .replaceAll("-", "")
        .toString();
}

export default returnCleanNumber;
