import { NextResponse } from 'next/server';
import { getProjects, saveProjects } from '@/lib/projects-server';
import { defaultProjects, Project } from '@/lib/projects';

export async function GET() {
  try {
    const projects = getProjects();
    return NextResponse.json({ success: true, projects });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects', projects: defaultProjects },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if this is a reset to defaults action
    if (body.action === 'reset') {
      saveProjects(defaultProjects);
      return NextResponse.json({ success: true, projects: defaultProjects });
    }

    // Check if this is a full sync of projects array
    if (Array.isArray(body.projects)) {
      saveProjects(body.projects);
      return NextResponse.json({ success: true, projects: body.projects });
    }

    // Otherwise, it is adding a single new project
    const newProject: Project = {
      id: body.id || `project-${Date.now()}`,
      title: body.title || 'Untitled Project',
      category: body.category || 'web',
      categoryLabel: body.categoryLabel || 'Web Application',
      description: body.description || '',
      image: body.image || '/image/project1.png',
      demoUrl: body.demoUrl || '#',
      githubUrl: body.githubUrl || 'https://github.com/RealRiga',
      technologies: Array.isArray(body.technologies)
        ? body.technologies
        : typeof body.technologies === 'string'
        ? body.technologies.split(',').map((t: string) => t.trim()).filter(Boolean)
        : [],
      featured: Boolean(body.featured),
    };

    const currentProjects = getProjects();
    // Prepend new project so it appears first
    const updatedProjects = [newProject, ...currentProjects];
    saveProjects(updatedProjects);

    return NextResponse.json({ success: true, project: newProject, projects: updatedProjects });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create or update project' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Project ID is required for update' },
        { status: 400 }
      );
    }

    const currentProjects = getProjects();
    const index = currentProjects.findIndex((p) => p.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    // Handle technologies parsing if string
    if (updates.technologies && typeof updates.technologies === 'string') {
      updates.technologies = updates.technologies
        .split(',')
        .map((t: string) => t.trim())
        .filter(Boolean);
    }

    currentProjects[index] = {
      ...currentProjects[index],
      ...updates,
      id, // Preserve id
    };

    saveProjects(currentProjects);

    return NextResponse.json({
      success: true,
      project: currentProjects[index],
      projects: currentProjects,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let id = searchParams.get('id');

    if (!id) {
      try {
        const body = await request.json();
        id = body.id;
      } catch {
        // body not present, handled below
      }
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Project ID is required' },
        { status: 400 }
      );
    }

    const currentProjects = getProjects();
    const updatedProjects = currentProjects.filter((p) => p.id !== id);
    saveProjects(updatedProjects);

    return NextResponse.json({ success: true, projects: updatedProjects });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
