from PIL import Image

def create_favicon(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    print(f"Original size: {img.size}")
    
    # Get bounding box of non-zero alpha pixels
    bbox = img.getbbox()
    if bbox:
        print(f"Content bbox: {bbox}")
        # Crop to content
        img = img.crop(bbox)
    
    # The logo is Icon + Text. The Icon is roughly square on the left.
    # Let's assume the icon height is the full height (or close to it) and it's somewhat square.
    # Let's crop the left part based on height.
    width, height = img.size
    
    # Heuristic: The icon width is probably similar to height.
    # Let's crop width = height + some margin, or just look for a gap in pixels.
    # For now, let's try cropping a square from the left.
    icon_size = height
    if width > height:
        print(f"Cropping square from left: {icon_size}x{icon_size}")
        icon = img.crop((0, 0, icon_size, height))
    else:
        icon = img
        
    # Resize to standard favicon size (e.g., 64x64 for high res)
    icon = icon.resize((64, 64), Image.Resampling.LANCZOS)
    
    icon.save(output_path)
    print(f"Favicon saved to {output_path}")

if __name__ == "__main__":
    input_file = "/home/meet/.gemini/antigravity/scratch/canada_sheet_metal/src/assets/logo.png"
    output_file = "/home/meet/.gemini/antigravity/scratch/canada_sheet_metal/public/favicon.png"
    create_favicon(input_file, output_file)
