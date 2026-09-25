import { prisma } from '@/db/prisma';

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const DEFAULT_BLOGS = [
  {
    slug: 'how-to-prevent-cavities',
    title: '5 Daily Habits to Prevent Cavities Forever',
    excerpt: "Discover the simple daily routines that can protect your teeth from decay — and save you trips to the dentist's chair.",
    author: 'Dr. Ramesh Kumar',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    content: `Here's something most people don't realize: brushing alone isn't enough to keep cavities away. Your toothbrush is doing important work, but it's only part of the picture. Cavities form in the gaps your brush can't reach and in the habits you don't think twice about — which means real protection comes from a handful of small daily choices, not just two minutes with a toothbrush.

Let's break down the five habits that actually make the difference.

### 1. Flossing Is Non-Negotiable
Here's a number that surprises most patients: your toothbrush can only clean about 60% of your tooth surfaces. The remaining 40% — the tight spaces between your teeth — is left untouched, and that's exactly where plaque loves to hide and bacteria love to multiply.

Flossing daily is the only way to physically remove that buildup before it turns into decay. Think of it less as an "extra step" and more as cleaning the other half of your mouth that brushing simply can't reach.

### 2. Limit Sugary Snacks (and Rinse When You Don't)
Every time you eat something sugary, you're not just feeding yourself — you're feeding the bacteria in your mouth. Those bacteria convert sugar into acid, and that acid is what slowly erodes your enamel, opening the door to cavities.

You don't have to give up sweets entirely. Just try to:
- Keep sugary snacks to mealtimes rather than constant grazing
- Rinse with water right after eating something sweet
- Reach for water instead of sugary drinks throughout the day

Small adjustments here go a long way toward protecting your enamel.

### 3. Don't Brush Right Away — Time It Right
It sounds counterintuitive, but brushing immediately after eating (especially acidic foods or drinks) can actually do more harm than good. Acid softens your enamel temporarily, and brushing too soon can wear it down faster.

Instead, wait about 30 minutes after eating before you brush. This gives your saliva time to naturally neutralize acids and re-harden your enamel first.

### 4. Choose Fluoride — and Use It Correctly
Fluoride isn't just a marketing term on toothpaste labels — it's one of the most effective tools we have for strengthening enamel and reversing early decay before it becomes a full-blown cavity.

Make sure you're:
- Using a fluoride toothpaste (check the label)
- Brushing for a full two minutes, not just a quick pass
- Spitting out excess toothpaste rather than rinsing immediately, so the fluoride stays on your teeth longer

### 5. Never Skip Your Check-Ups
Even with a flawless routine at home, some things only a professional can catch — early-stage cavities, weak spots in enamel, or plaque that's hardened into tartar. Regular cleanings remove what your toothbrush and floss physically cannot, and early detection means smaller, simpler treatments instead of bigger problems down the road.

As Dr. Ramesh Kumar puts it, prevention is always the more affordable — and more comfortable — path compared to treatment after the fact.

> "Prevention is always better, and cheaper, than cure when it comes to dental health." — Dr. Ramesh Kumar

### The Bottom Line
Cavities aren't inevitable — they're usually the result of small daily gaps in an otherwise good routine. Floss daily, be mindful of sugar, time your brushing right, use fluoride properly, and never skip your bi-annual visit to Dental World. Stack these five habits together, and you're giving your teeth the best possible shot at a cavity-free future.`,
  },
  {
    slug: 'benefits-of-invisalign',
    title: 'Why Invisalign is Better Than Traditional Braces',
    excerpt: 'Thinking about straightening your teeth? Here is everything you need to know about clear aligners.',
    author: 'Dr. Sunitha Rao',
    image: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=800&q=80',
    content: `Clear aligners like Invisalign have revolutionized orthodontic treatment. Unlike traditional metal braces, clear aligners are virtually invisible, comfortable, and removable for eating and cleaning.

### Aesthetics and Confidence
With clear aligners, you can straighten your teeth without feeling self-conscious about wire brackets.

### Hygiene and Comfort
Since the aligners are removable, brushing and flossing are straightforward, maintaining superior gum health throughout treatment.

### Custom Digital Precision
Every set of aligners is custom-designed using high-precision 3D digital imaging to map your tooth movements step-by-step.`,
  },
  {
    slug: 'dental-implant-myths',
    title: 'Busting 3 Common Myths About Dental Implants',
    excerpt: "Are dental implants really painful? Do they look fake? Let's separate fact from fiction.",
    author: 'Dr. Ramesh Kumar',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    content: `If you're missing a tooth, chances are someone has already suggested dental implants — and chances are, a nagging worry stopped you from looking into it further. Maybe you pictured a painful surgery. Maybe you imagined walking around with an obvious "fake tooth." Maybe you assumed it would mean a lifetime of extra dental work.

Here's the truth: dental implants are considered the gold standard in tooth replacement for a reason, and most of what's holding people back is myth, not medicine. Let's set the record straight.

### Myth #1: "Dental Implants Are Excruciatingly Painful"
This is, by far, the biggest fear we hear — and it's also the most outdated.

Picture this instead: you're comfortably numbed with modern local anesthesia, your dentist uses precision-guided surgical technology to place the implant with pinpoint accuracy, and the entire procedure feels far less dramatic than you braced yourself for. Most patients describe the sensation as similar to a tooth extraction — some pressure, maybe a little post-op tenderness, but nothing that over-the-counter pain relief can't handle.

In fact, many patients are surprised to find themselves back to normal activities within a day or two. The "painful surgery" you're picturing belongs in the past, not in a modern dental chair.

**The reality:** Minimal discomfort, manageable recovery, and results that last a lifetime.

### Myth #2: "They'll Look Obviously Fake"
Nobody wants a smile that screams "dental work." Fortunately, that's not how modern implants are made.

Every implant crown is custom-crafted to match the color, size, shape, and even the subtle translucency of your natural teeth. Your dentist takes precise measurements and impressions so the final result blends in seamlessly — not just with your smile, but with your bite and facial structure too.

The truth is, most people can't tell the difference between an implant and a natural tooth just by looking. And that's the whole point: implants are designed to disappear into your smile, not stand out from it.

**The reality:** A custom-matched, natural-looking result that's practically indistinguishable from the real thing.

### Myth #3: "They Require Constant, High-Maintenance Care"
Here's some good news — implants don't come with a complicated care manual. They function just like your natural teeth, which means the maintenance routine you already know is all you need:
- Brush twice a day
- Floss daily
- Keep up with regular dental checkups

That's it. No special soaking, no removable pieces to fuss over, no elaborate rituals. In fact, many patients say caring for their implant feels so normal, they forget it's not their original tooth.

**The reality:** Simple, familiar care — with none of the hassle myths suggest.

### The Bottom Line
Fear of pain, fear of looking unnatural, fear of complicated upkeep — these myths have kept far too many people from a solution that could genuinely transform their smile and confidence. The real story is far less scary: modern dental implants are comfortable, natural-looking, and easy to maintain.

If missing teeth have been holding you back, it might be time to see what dental implants can really do for you — myth-free.`,
  },
];

/**
 * Ensures initial default blogs exist in DB if empty, or are kept up to date.
 */
export async function seedInitialBlogsIfEmpty() {
  try {
    for (const blog of DEFAULT_BLOGS) {
      await prisma.blogPost.upsert({
        where: { slug: blog.slug },
        update: {
          title: blog.title,
          excerpt: blog.excerpt,
          content: blog.content,
        },
        create: blog,
      });
    }
  } catch (error) {
    console.error('Error seeding initial blogs:', error);
  }
}

/**
 * Get all blog posts ordered by creation date descending.
 */
export async function getAllBlogPosts(): Promise<BlogPostItem[]> {
  try {
    await seedInitialBlogsIfEmpty();
    return await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPostItem | null> {
  try {
    await seedInitialBlogsIfEmpty();
    return await prisma.blogPost.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get a single blog post by ID.
 */
export async function getBlogPostById(id: string): Promise<BlogPostItem | null> {
  try {
    return await prisma.blogPost.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Error fetching blog post with ID "${id}":`, error);
    return null;
  }
}
