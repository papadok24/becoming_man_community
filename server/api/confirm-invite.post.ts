import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client with service role
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { inviteCode } = body

    if (!inviteCode) {
      throw createError({
        statusCode: 400,
        message: 'Invite code is required'
      })
    }

    // Query the invites table
    const { data: invite, error: inviteError } = await supabase
      .from('invitation')
      .select('*')
      .eq('code', inviteCode)
      .single()

    if (inviteError || !invite) {
      throw createError({
        statusCode: 404,
        message: 'Invalid invite code'
      })
    }

    if (invite.used) {
      throw createError({
        statusCode: 400,
        message: 'This invite code has already been used'
      })
    }

    // Mark invite as used
    const { error: updateError } = await supabase
      .from('invitation')
      .update({ 
        used: true,
        used_at: new Date().toISOString() 
      })
      .eq('id', invite.id)

    if (updateError) {
      throw createError({
        statusCode: 500,
        message: 'Failed to update invite status'
      })
    }

    return {
      valid: true,
      roleId: invite.role_id
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 