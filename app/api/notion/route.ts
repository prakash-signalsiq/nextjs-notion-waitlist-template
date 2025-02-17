import { NextResponse } from 'next/server';

import { Client } from '@notionhq/client';

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET });
    const response = await notion.pages.create({
      parent: {
        database_id: `${process.env.NOTION_DB}`,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: body?.email,
              },
            },
          ],
        },
        "Name": {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: body?.name,
              },
            },
          ],
        },
        "Experience": {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: body?.experience,
              },
            },
          ],
        },
        "Company": {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: body?.company,
              },
            },
          ],
        },
      },
    });

    if (!response) {
      throw new Error("Failed to add email to Notion");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
