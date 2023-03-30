import React, { useMemo, useState } from 'react';

export const StringConvert = () => {

    const [input, setInput] = useState(" ")
    const firstLetterCapital = (str) => {
        var newStr = str.split(" ")
        var newArr = newStr.map((value) => {
            return value.charAt(0).toUpperCase() + value.slice(1)
        })
        return newArr.join(" ")
    }

    const reverseString = (str) => {
        var revStr = str.split("").reverse().join("")
        return revStr;
    }


    const isPalindrome = useMemo(() => {
        return input == input.split("").reverse().join("")
    }, [input])


    return (
        <>
            <h1 style={{ color: "maroon", textAlign: "center" }}>Please Enter String to Convert</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                    style={{ border: "1px solid green", height: "30px", width: "500px" }}
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                />

            </div>

            <p>{input}</p>

            <table class="table">

                <tbody>
                    <tr className=''>
                        <th scope="row">1</th>
                        <td colspan="5">First Letter Capital -- </td>
                        <td>{firstLetterCapital(input)}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td colspan="5">Length of String -- </td>
                        {input.length < 1 ? ("") : (<td>{input.replace(/\s/g, "").length}</td>)}

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="5">String in Uppercase -- </td>
                        <td>{input.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td colspan="5">String in Lowercase -- </td>
                        <td>{input.toLowerCase()}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td colspan="5">Reverse String -- </td>
                        <td>{reverseString(input)}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td colspan="5">Palindrome -- </td>
                        {input < 1 ? (" ") : (<td>{isPalindrome ? "Yes" : "No"}</td>)}

                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default StringConvert;




