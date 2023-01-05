function greet(name: string | null) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello, stranger.";
  }
}
