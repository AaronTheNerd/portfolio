export enum Language {
  cpp = "cplusplus",
  c = "c",
  py = "python",
  js = "javascript",
  java = "java",
  matlab = "matlab",
  arduino = "arduino",
  verilog = "verilog",
}

export function valueStringToLanguage(value: string): Language | null{
  const languages = [
    Language.cpp,
    Language.c,
    Language.py,
    Language.js,
    Language.java,
    Language.matlab,
    Language.arduino,
    Language.verilog
  ];
  for (let i = 0; i < languages.length; ++i) {
    if (languages[i] == value) return languages[i];
  }
  return null;
}