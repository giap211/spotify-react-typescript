
function useRaiseColorTone(color: string): string {

  // Extract the RGB components from the color code
  const red = parseInt(color.substr(1, 2), 16)
  const green = parseInt(color.substr(3, 2), 16)
  const blue = parseInt(color.substr(5, 2), 16)

  // Calculate the raised color values
  const raisedRed = Math.min(Math.round(red * 1.2), 255)
  const raisedGreen = Math.min(Math.round(green * 1.2), 255)
  const raisedBlue = Math.min(Math.round(blue * 1.2), 255)

  // Convert the raised color values back to hexadecimal
  const raisedColor = `#${raisedRed
    .toString(16)
    .padStart(2, '0')}${raisedGreen
    .toString(16)
    .padStart(2, '0')}${raisedBlue.toString(16).padStart(2, '0')}`

  return raisedColor
}

export default useRaiseColorTone
