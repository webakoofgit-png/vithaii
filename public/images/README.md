# Vittahii reference assets

The supplied screenshots are the visual source. Each major section remains a
separate component under `src/components/vittahii`.

`src/components/vittahii/assets.ts` contains paths, dimensions and crop coordinates.
`ReferenceImage` displays photographic regions using CSS; source screenshots are
unchanged. Replace an entry with `{ src: "/images/products/original.webp", width:
1600, height: 1000 }` to use an original without screenshot cropping. Use the
replacement image's actual dimensions.

| Asset | Source |
| --- | --- |
| `legacy/reference.png` | Screenshot 155755; family archive and dairy detail |
| `products/ghee-reference.png` | Screenshot 155822; three branded jars |
| `products/range-reference.png` | Screenshot 160021; five pack sizes |
| `quality/reference.png` | Screenshot 155906; laboratory image |
| `founder/reference.png` | Screenshot 160003; supplied portrait |
| `hero/ghee-pouring.png` | Background restored from screenshot 155736 |
| `process/ghee-preparation.png` | Background restored from screenshot 155853 |
| `brand-story/heritage-table.png` | Background restored from screenshot 155943 |
| `brand/logo.png` | Transparent logo reconstructed from screenshot 160220 |

The built-in imagegen tool created the last four assets. They are reference-derived
reconstructions, not original photography or master logo artwork. Replace them
with approved originals for exact fidelity. Cropped photos retain the resolution
of the supplied screenshots.

Prompt set:

- Hero: remove website text, logo, navigation, buttons, lines, date and outer
  margins; preserve the hand pouring ghee from the brass ladle into the bowl,
  cloth, crop and warm lighting.
- Process: remove heading, copy, numbered steps, dots, lines and button; preserve
  the brass cooking vat, steam, stirring ladle and worker in a 2.5:1 composition.
- Brand story: remove website text and bottom interface pill; preserve farmer
  and cow on the left, branded jar and kitchen on the right, packaging text,
  lighting and 2:1 composition.
- Logo: extract only the red/yellow Vittahii mark, green leaves and white script
  lettering, on a transparent background, without tagline or UI.

WhatsApp, email and both telephone links use the supplied contact details.
Footer social links point to social platforms because approved brand profile
URLs were not supplied. Certification qualifiers remain as supplied.
