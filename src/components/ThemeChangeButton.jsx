"use client";

import * as React from 'react';

export default function ThemeChangeButton() {
    return (
        <button onClick={change}>Change</button>
    );
}

function change() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  }